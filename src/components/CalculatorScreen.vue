<template>
    <div class="calculator">
        <div class="header" @click="$emit('go')">
            <span class="material-symbols-outlined back">arrow_back</span>
        </div>

        <div class="boxes">

            <img class="illustration" src="../assets/illustration.png" />

            <div class="explanation">
                <div class="htitle">Turbinar saldo</div>
                Saiba agora mesmo o quanto seu dinheiro poderia render se aplicado hoje em algumas das nossas opções de
                investimento.
            </div>

            <div class="resultbox">
                Seu rendimento seria
                <div class="profit"><span>R$</span>{{ formattedResultado }}</div>
                <div class="fake-compare"><b>R${{ fakeCompare }}</b> a mais que a poupança!</div>
            </div>

            <div class="calcbox">
                <span class="material-symbols-outlined box-icon">monetization_on</span>
                <div class="labels">Aplicando <span>R${{ valorAportado }},00</span></div>
                <vue-slider v-model="valorAportado" :dotSize="18" :min="getAtivo().valorMin" :max="balance * 2"
                    tooltip="none" :interval=50 />
            </div>

            <div class="calcbox">
                <span class="material-symbols-outlined box-icon">calendar_month</span>
                <div class="labels">Durante <span>{{ tempoInvestido }} meses</span></div>
                <vue-slider v-model="tempoInvestido" :dotSize=18
                    :min="getAtivo().vencimento > 0 ? getAtivo().vencimento : 1" :max=12 tooltip="none" interval=1 />
            </div>

            <div class="ativos">

                <div class="ativo" :class="{ 'checked': checked == ativo._id }" v-for="ativo in ativos" :key="ativo._id"
                    @click="clickAtivo(ativo._id)">
                    <span class="material-symbols-outlined check-icon">{{ checked == ativo._id ?
                            'radio_button_checked'
                            : 'radio_button_unchecked'
                    }}</span>
                    {{ ativo.nome }}
                    <div class="ativo-desc">Resgate {{ ativo.vencimento < 0 ? 'diário' : 'após ' + ativo.vencimento
                            + ' meses'
                    }}</div>
                            <div class="ativo-desc">Rentabilidade {{ ativo.rentabilidadeDoCDI }}%</div>
                            <div class="ativo-desc">Valor mínimo R${{ ativo.valorMin }},00</div>
                    </div>
                    <div class="ativo more-products">
                        Veja todas nossas opções de aplicações
                    </div>
                </div>




            </div>
            <div class="bottombox">
                <div class="invest-bt"><span class="material-symbols-outlined">add_circle</span> Investir agora</div>
                <div class="more-bt">Tire suas dúvidas sobre investimentos</div>

            </div>

        </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
export default {
    name: 'CalculatorScreen',
    props: {
        balance: Number
    },
    components: {
        VueSlider
    },
    methods: {
        clickAtivo(id) {
            this.checked = id;
        },

        toDecimal(value) {
            return value / 100
        },

        calcTempoAno(tempoInvestido) {
            return tempoInvestido / 12
        },

        calcTempoDias(tempoInvestido) {
            return tempoInvestido * 30
        },

        calcTaxaJuros(cdi, cdb) {
            return cdi * cdb
        },

        taxasImposto(tempo) {
            if (tempo <= 0.5) return .225
            else if (tempo > 0.5 && tempo <= 1) return .2
            else if (tempo > 1 && tempo <= 2) return .175
            else if (tempo > 2) return .15
        },

        calcValorLiquido(iaporte, valorBruto, tempo) {
            return iaporte + ((valorBruto - iaporte) * (1 - this.taxasImposto(tempo)))
        },


        rentabilidadeCDB(aporte, tempoInvestido, cdi, ativo) {
            if (aporte >= ativo.valorMin) {
                if (ativo.resgate == 'Vencimento' && (tempoInvestido < ativo.vencimento || tempoInvestido > ativo.vencimento)) {
                    this.resultado = 0;
                }
                let cdb = this.toDecimal(ativo.rentabilidadeDoCDI)
                let tempo = this.calcTempoAno(this.tempoInvestido)

                let taxaJuros = this.calcTaxaJuros(cdi, cdb)

                let valorBruto = (this.valorAportado * ((1 + taxaJuros) ** tempo)).toFixed(2)
                let valorLiquido = this.calcValorLiquido(this.valorAportado, valorBruto, tempo).toFixed(2)

                let values = {
                    valorBruto,
                    valorLiquido,
                }

                this.resultado = valorLiquido - aporte;
                return values
            } else {
                this.resultado = 0;
            }
        },

        melhorInvestimento(ativos, aporte, tempoInvestido) {
            let valorMelhorAtivo = 0;
            let melhorAtivo;

            for (let ativo of ativos) {
                let rentabilidade = this.rentabilidadeCDB(aporte, tempoInvestido, this.CDI, ativo)
                if (rentabilidade && rentabilidade.valorLiquido && rentabilidade.valorLiquido > valorMelhorAtivo) {
                    valorMelhorAtivo = rentabilidade.valorLiquido
                    melhorAtivo = ativo
                }
            }

            return {
                ativo: melhorAtivo,
                valorLiquido: valorMelhorAtivo
            }
        },

        getAtivo() {
            return this.ativos.find(value => value._id == this.checked);
        },

        refresh() {
            this.rentabilidadeCDB(this.valorAportado, this.tempoInvestido, this.CDI, this.getAtivo())
            this.validaAtivos()
        },

        validaAtivos() {
            //  const best = this.melhorInvestimento(this.ativos, this.valorAportado, this.tempoInvestido);
        }
    },
    watch: {
        checked() {
            this.refresh()
        },
        valorAportado() {
            this.refresh()
        },
        tempoInvestido() {
            this.refresh()
        }
    },
    computed: {
        formattedResultado() {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.resultado).split("R$")[1]
        },
        fakeCompare() {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.resultado * 0.5).split("R$")[1]
        }
    },
    mounted() {
        this.refresh();
        this.valorAportado = this.balance;
        //('getMelhorInvestimento', this.melhorInvestimento(this.ativos, this.valorAportado, this.calcTempoAno))
    },
    data() {
        return {
            CDI: .1315,
            valorAportado: 1000,
            tempoInvestido: 6,
            checked: 3,
            resultado: 0,
            ativos: [
                {
                    _id: 1,
                    nome: 'CDB Liquidez Diária',
                    risco: 'Baixo',
                    rentabilidadeDoCDI: '110',
                    valorMin: 1,
                    resgate: 'Diário',
                    vencimento: -1,
                    tempoInvestido: 6
                },
                {
                    _id: 2,
                    nome: 'CDB PagBank',
                    risco: 'Baixo',
                    rentabilidadeDoCDI: '120',
                    valorMin: 500,
                    resgate: 'Vencimento',
                    vencimento: 12,
                    tempoInvestido: 10
                },
                {
                    _id: 3,
                    nome: 'CDB PagBank',
                    risco: 'Baixo',
                    rentabilidadeDoCDI: '115',
                    valorMin: 500,
                    resgate: 'Vencimento',
                    vencimento: 6,
                    tempoInvestido: 5
                },
                {
                    _id: 4,
                    nome: 'Poupa Mais CDB',
                    risco: 'Baixo',
                    rentabilidadeDoCDI: '100',
                    valorMin: '1000',
                    resgate: 'Diário',
                    vencimento: -1,
                    tempoInvestido: 120
                }
            ]
        }
    }
}
</script>

<style scoped>
.checked {
    opacity: 1 !important;
}

.fake-compare {
    font-size: 12px;
    background-color: #fff;
    border-radius: 15px;
    padding: 6px 15px;
    display: inline-block;
    color: #666
}

.fake-compare b {
    color: #000;
}

.more-products {
    color: #666 !important;
    font-size: 14px;
    text-align: center;
    padding: 15px;
    border-top: 2px dashed #ddd;
}

.ativos {
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
}

.ativo {
    cursor: pointer;
    color: black;
    padding: 14px 22px;
    border-bottom: 1px solid white;
    opacity: 0.7;
}

.ativo-desc {
    margin-left: 30px;
    font-size: 13px;
    color: #aaa;
}

.ativo:last-child {
    border-bottom: none;
}

.calculator {
    /*background-color: #4ca73e;*/
    background-color: #fff;
    min-height: calc(100vH + 6px);
    margin-top: -6px;
    text-align: left;
}

@media (min-width: 428px) {
    .calculator {
        border-radius: 30px;
    }
}

.illustration {
    display: block;
    max-width: 100%;
    width: 300px;
    margin: 0 auto !important;
    margin-top: -60px;
    margin-bottom: 20px;
    text-align: center;
}

.header {
    position: relative;
    margin-top: 0px;
    padding: 25px 20px 20px 0px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #000;
    cursor: pointer;
}

.back {
    position: relative;
    float: left;
    margin: 0px 18px;
    color: #333;
    z-index: 1;
    font-weight: light;

}

.htitle {
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 20px;
    color: #222;
}

.explanation {
    color: #888;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    margin: 10px 10px 50px;
    text-align: center;
}




.boxes {
    padding: 20px;
    font-weight: 500;
}

.calcbox {
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
    font-size: 15px;
    color: #333;
}

.calcbox .labels {
    margin-bottom: 10px;
    ;
}

.calcbox span {
    font-size: 1.5em;
    color: black;
    font-weight: 900;
}

.box-icon {
    float: right;
    font-size: 35px !important;
    margin: -5px;
    color: #ddd !important;
}

.resultbox {
    background-color: #f4f4f4;
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
    font-size: 15px;
    color: #222;
    text-align: center;
}

.profit {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 00px;
    color: #4ca63d;
    letter-spacing: -1px;
    ;
}

.profit span {
    font-size: 0.6em;
    margin-right: 4px;
}

.invest-bt {
    max-width: 160px;
    margin: 0 auto;
    font-size: 15px;
    border-radius: 20px;
    color: #4ea3ce;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #fff;
}

.invest-bt span {
    vertical-align: bottom;
    font-size: 20px;
}

.more-bt {
    margin: 0 auto;
    font-size: 12px;
    color: #fff;
    font-weight: bold;

}

.bottombox {
    text-align: center;
    background-color: #4ea3ce;
    border-top: 8px solid #f4f4f4;
    padding: 40px 20px 30px;
}

.bottombox>div {
    padding: 10px 20px;
}

.check-icon {
    font-size: 18px;
    vertical-align: bottom;
    margin: 0 6px 1px 0px;
    ;
}
</style>
