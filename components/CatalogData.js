import { randomBytes } from "crypto";

export const CatalogData = {
    cakes: [
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo de Festa 10 pessoas',
            image: 'https://images.unsplash.com/photo-1546857098-b787ce02be9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80',
            description: 'Bolo com 12 fatias, disponíveis nos sabores abacaxi com coco, abacaxi com brigadeiro branco, brigadeiro com coco, brigadeiro tradicional e brigadeiro branco com preto',
            price:'85'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo de Festa 15 pessoas',
            image: 'https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80', //https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80
            description: 'Bolo com 17 fatias, disponíveis nos sabores abacaxi com coco, abacaxi com brigadeiro branco, brigadeiro com coco, brigadeiro tradicional e brigadeiro branco com preto',
            price:'100'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo de Festa 20 pessoas',
            image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=336&q=80', //https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80
            description: 'Bolo com 23 fatias, disponíveis nos sabores abacaxi com coco, abacaxi com brigadeiro branco, brigadeiro com coco, brigadeiro tradicional e brigadeiro branco com preto',
            price:'135'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo de Festa 30 pessoas',
            image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'Bolo com 35 fatias, disponíveis nos sabores abacaxi com coco, abacaxi com brigadeiro branco, brigadeiro com coco, brigadeiro tradicional e brigadeiro branco com preto',
            price:'145'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Broa',
            image: 'https://images.unsplash.com/photo-1501437638401-4addcfd56d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio',
            price:'25'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo Caseiro de Cenoura',
            image: 'https://images.unsplash.com/photo-1587306433599-44cd81cbde86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio',
            price:'25'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo Caseiro de Chocolate',
            image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio',
            price:'25'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo Caseiro de Coco',
            image: 'https://images.unsplash.com/photo-1497681204192-eb12c0702305?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio',
            price:'25'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo Caseiro Formigueiro',
            image: 'https://images.unsplash.com/photo-1512223792601-592a9809eed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio',
            price:'25'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo de festa 3 andares',
            image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio',
            price:'249.90'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Bolo de limão com framboesa',
            image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio',
            price:'115.00'

        }, 
    ],
    pies: [
        {
            id: randomBytes(7).toString('hex'),
            name: 'Torta de baunilha',
            image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'Uma torta ou tarte é um alimento cozido ao forno, feito com massa de farinha e recheado com ingredientes variados, tanto doces quanto salgados. Existem vários tipos de torta doce, como, tortas de mirtilo, maçã, abóbora, amora, pêssego ou limão.',
            price:'39.90'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Torta de frango Americana',
            image: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            description: 'Uma torta ou tarte é um alimento cozido ao forno, feito com massa de farinha e recheado com ingredientes variados, tanto doces quanto salgados. Existem vários tipos de torta doce, como, tortas de mirtilo, maçã, abóbora, amora, pêssego ou limão.',
            price:'42.00'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Torta Fitness',
            image: 'https://images.unsplash.com/photo-1624299831638-82c15fcafd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'Uma torta ou tarte é um alimento cozido ao forno, feito com massa de farinha e recheado com ingredientes variados, tanto doces quanto salgados. Existem vários tipos de torta doce, como, tortas de mirtilo, maçã, abóbora, amora, pêssego ou limão.',
            price:'49.90'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Tortinha doce',
            image: 'https://images.unsplash.com/photo-1599749001441-5f2c23e3bbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
            description: 'Uma torta ou tarte é um alimento cozido ao forno, feito com massa de farinha e recheado com ingredientes variados, tanto doces quanto salgados. Existem vários tipos de torta doce, como, tortas de mirtilo, maçã, abóbora, amora, pêssego ou limão.',
            price:'7.90'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Tarte doce e salgado',
            image: 'https://images.unsplash.com/photo-1607982844986-fed9c197a4d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
            description: 'Uma torta ou tarte é um alimento cozido ao forno, feito com massa de farinha e recheado com ingredientes variados, tanto doces quanto salgados. Existem vários tipos de torta doce, como, tortas de mirtilo, maçã, abóbora, amora, pêssego ou limão.',
            price:'12.85'

        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Torta de amora Americana',
            image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Uma torta ou tarte é um alimento cozido ao forno, feito com massa de farinha e recheado com ingredientes variados, tanto doces quanto salgados. Existem vários tipos de torta doce, como, tortas de mirtilo, maçã, abóbora, amora, pêssego ou limão.',
            price:'56.90'

        },
    ],
    cupcakes: [
        {
            id: randomBytes(7).toString('hex'),
            name: 'Cupcake alegria',
            image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio.',
            price:'12.90'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Cupcake framboesa',
            image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio.',
            price:'12.90'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Cupcake de baunilha',
            image: 'https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio.',
            price:'13.90'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Cupcake ferrero',
            image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio.',
            price:'15.00'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Cupcake de cenoura com cereja',
            image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio.',
            price:'12.90'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Cupcake de oreo e baunilha',
            image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            description: 'Bolinho, bolo de caneca, bolo de xícara, bolo de copo, bolo de forminha ou cupcake é um pequeno bolo designado para servir uma única pessoa, frequentemente assado em um pequeno copo de papel alumínio.',
            price:'15.00'
        },
    ],
    candies: [
        {
            id: randomBytes(7).toString('hex'),
            name: 'Docinhos tradicionais 100 unidades',
            image: 'https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Docinhos tradicionais, 100 unidades, beijinho de coco, brigadeiro branco, brigadeiro de paçoca, brigadeiro de churros, brigadeiro tradicional, cajuzinho, casadinho, moranguinho.',
            price:'89.90'
        },
        {
            id: randomBytes(7).toString('hex'),
            name: 'Docinhos Gourmet 100 unidades',
            image: 'https://images.unsplash.com/photo-1547398847-19d7560a6257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
            description: 'Docinhos Gourmet, 100 unidades, brigadeiro com Coco queimado, brigadeiro de ninho com nutella, brigadeiro com castanha do Pará, brigadeiro passado no amendoim, brigadeiro de leite ninho com uva, brigadeiro com raspa de chocolate, brigadeiro de chocolate meio amargo, churros com doce de leite, olho de sogra.',
            price:'125.00'
        },
    ]
}