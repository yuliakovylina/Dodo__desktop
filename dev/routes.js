const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const pizzasSchema = new Schema ({
//     id: String,
//     img: {
//         src: String,
//         name: String
//     },
//     title: String,
//     subtitle: String,
//     description: String,
//     cost: String,
//     btn: String,
//     btnMobile: String
// });
// //создаем модель и переходим в body/request on/ end
//const Pizzas = mongoose.model('pizzas', pizzasSchema);

const comboSchema = new Schema ({
    id: String,
    img: {
        src: String,
        name: String
    },
    title: String,
    subtitle: String,
    description: String,
    cost: String,
    btn: String,
    btnMobile: String
});
const Combo = mongoose.model('combos', comboSchema);

function routes (request, response) {
    mongoose.connect('mongodb://localhost/test');

    if (request.url === '/pizzas' && request.method === 'GET') {
        console.log('pizzas GET')
    }

    if (request.url === '/pizzas' && request.method === 'POST') {
        console.log('pizzas POST')
    }
//мы создали маршрут и если он свпадает с adduser и метод запроса пост
    if (request.url === '/adduser' && request.method === 'POST') {
//мы берем пустую строчку
        let body = '';
        //и вешаем событие на наш запрос
        request.on('data', chunk => { //приходят данные, мы берем кусочек этих данных
            body += chunk.toString(); //и конвертируем их в строку и конкатенируем в body
        });
        request.on('end', () => {//как только завершился запрос
            //здесь будет бизнес-логика вторым параметром после end,
            //мы формируем ответ
               //берем данные которые мы положили в body и переводим в  JSON, сохраняя в переменной
            // const pizza = JSON.parse(body)
            // //далее на основании модели записываем объект в базу
            // Pizzas.updateOne ({
            //     id: pizza.id,
            //     img: {
            //         src: pizza.src,
            //         name: pizza.name
            //     },
            //     title: pizza.title,
            //     subtitle: pizza.subtitle,
            //     description: pizza.description,
            //     cost: pizza.cost,
            //     btn: pizza.btn,
            //     btnMobile: pizza.btnMobile
            //
            // })

            const combo = JSON.parse(body)

            Combo.insertMany ({
                id: combo.id,
                img: {
                    src: combo.src,
                    name: combo.name
                },
                title: combo.title,
                subtitle: combo.subtitle,
                description: combo.description,
                cost: combo.cost,
                btn: combo.btn,
                btnMobile: combo.btnMobile

            })

            response.end(body);//можно отправить 'ok', чтобы не слать данные открыто
        });
    }
}
module.exports = routes