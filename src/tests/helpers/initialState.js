const initialState = {
  user: {
    email: 'test@mail.com'
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE'
    ],
    expenses: [
      {
        id: 0,
        value: '123',
        description: 'qwe',
        method: 'Dinheiro',
        tag: 'Alimentação',
        currency: 'USD',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.2216',
            low: '5.1462',
            varBid: '-0.0094',
            pctChange: '-0.18',
            bid: '5.1724',
            ask: '5.1735',
            timestamp: '1659128393',
            create_date: '2022-07-29 17:59:53'
          },
          USDT: {
            code: 'USD',
            codein: 'BRLT',
            name: 'Dólar Americano/Real Brasileiro Turismo',
            high: '5.235',
            low: '5.175',
            varBid: '0.01',
            pctChange: '0.19',
            bid: '5.05',
            ask: '5.36',
            timestamp: '1659121740',
            create_date: '2022-07-29 16:09:00'
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '4.0653',
            low: '4.0077',
            varBid: '-0.0027',
            pctChange: '-0.07',
            bid: '4.0433',
            ask: '4.0444',
            timestamp: '1659128398',
            create_date: '2022-07-29 17:59:58'
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '6.348',
            low: '6.2343',
            varBid: '-0.0155',
            pctChange: '-0.25',
            bid: '6.2938',
            ask: '6.2972',
            timestamp: '1659128393',
            create_date: '2022-07-29 17:59:53'
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0398',
            low: '0.0392',
            varBid: '-0.0001',
            pctChange: '-0.25',
            bid: '0.0394',
            ask: '0.0394',
            timestamp: '1659128397',
            create_date: '2022-07-29 17:59:57'
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '127.9',
            low: '122',
            varBid: '-3875',
            pctChange: '-3.04',
            bid: '123.61',
            ask: '123.792',
            timestamp: '1659275764',
            create_date: '2022-07-31 10:56:04'
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '331',
            low: '311.82',
            varBid: '-6.86',
            pctChange: '-2.1',
            bid: '318.24',
            ask: '318.9',
            timestamp: '1659275761',
            create_date: '2022-07-31 10:56:01'
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.3261',
            low: '5.2396',
            varBid: '0.0071',
            pctChange: '0.13',
            bid: '5.2883',
            ask: '5.2915',
            timestamp: '1659128393',
            create_date: '2022-07-29 17:59:53'
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03911',
            low: '0.03841',
            varBid: '0.0002',
            pctChange: '0.52',
            bid: '0.03881',
            ask: '0.03884',
            timestamp: '1659128385',
            create_date: '2022-07-29 17:59:45'
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.4686',
            low: '5.3833',
            varBid: '0.0103',
            pctChange: '0.19',
            bid: '5.4343',
            ask: '5.4372',
            timestamp: '1659128393',
            create_date: '2022-07-29 17:59:53'
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.6455',
            low: '3.5795',
            varBid: '-0.0019',
            pctChange: '-0.05',
            bid: '3.6159',
            ask: '3.618',
            timestamp: '1659128398',
            create_date: '2022-07-29 17:59:58'
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.7721',
            low: '0.7637',
            varBid: '-0.0009',
            pctChange: '-0.12',
            bid: '0.767',
            ask: '0.7671',
            timestamp: '1659128342',
            create_date: '2022-07-29 17:59:02'
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.5331',
            low: '1.5107',
            varBid: '0.002',
            pctChange: '0.13',
            bid: '1.5233',
            ask: '1.5235',
            timestamp: '1659128343',
            create_date: '2022-07-29 17:59:03'
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '9.064',
            low: '8.70001',
            varBid: '-70.44',
            pctChange: '-0.78',
            bid: '8.91655',
            ask: '8.93395',
            timestamp: '1659275763',
            create_date: '2022-07-31 10:56:03'
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.12',
            low: '2',
            varBid: '-0.03',
            pctChange: '-1.55',
            bid: '2.02',
            ask: '2.03',
            timestamp: '1659275748',
            create_date: '2022-07-31 10:55:48'
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.377381',
            low: '0.35801',
            varBid: '-0.00577599',
            pctChange: '-1.56',
            bid: '0.364124',
            ask: '0.364124',
            timestamp: '1659276794',
            create_date: '2022-07-31 11:13:14'
          }
        }
      }
    ],
    editor: false,
    idToEdit: 0
  }
}

export default initialState
