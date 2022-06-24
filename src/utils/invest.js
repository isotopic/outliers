
const toDecimal = function (value) {
    return value / 100
}

const calcTempoAno = function (tempoInvestido) {
    return tempoInvestido / 12
}

/*
const calcTempoDias = function (tempoInvestido) {
    return tempoInvestido * 30
}
*/
const calcTaxaJuros = function (cdi, cdb) {
    return cdi * cdb
}

const taxasImposto = function (tempo) {
    if (tempo <= 0.5) return .225
    else if (tempo > 0.5 && tempo <= 1) return .2
    else if (tempo > 1 && tempo <= 2) return .175
    else if (tempo > 2) return .15
}

const calcValorLiquido = function (iaporte, valorBruto, tempo) {
    return iaporte + ((valorBruto - iaporte) * (1 - taxasImposto(tempo)))
}


export const rentabilidadeCDB = function (aporte, tempoInvestido, cdi, ativo) {
    if (aporte >= ativo.valorMin) {
        if (ativo.resgate == 'Vencimento' && (tempoInvestido < ativo.vencimento)) {
            console.log(tempoInvestido, ativo.vencimento);
            return { profit: 0 }
        }
        let cdb = toDecimal(cdi)
        let tempo = calcTempoAno(tempoInvestido)

        let taxaJuros = calcTaxaJuros(cdi, cdb)

        let valorBruto = (aporte * ((1 + taxaJuros) ** tempo)).toFixed(2)
        let valorLiquido = calcValorLiquido(aporte, valorBruto, tempo).toFixed(2)

        return {
            valorBruto,
            valorLiquido,
            profit: valorLiquido - aporte
        }

    } else {
        return { profit: 0 }
    }
}

export const melhorInvestimento = function (ativos, aporte, tempoInvestido, cdi) {
    let valorMelhorAtivo = 0;
    let melhorAtivo;

    for (let ativo of ativos) {
        let rentabilidade = this.rentabilidadeCDB(aporte, tempoInvestido, cdi, ativo)
        if (rentabilidade && rentabilidade.valorLiquido && rentabilidade.valorLiquido > valorMelhorAtivo) {
            valorMelhorAtivo = rentabilidade.valorLiquido
            melhorAtivo = ativo
        }
    }

    return {
        ativo: melhorAtivo,
        valorLiquido: valorMelhorAtivo
    }
}