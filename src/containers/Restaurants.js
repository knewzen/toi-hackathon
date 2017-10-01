import React from 'react'
import { connect } from 'react-redux'
import { fetchResRequest } from 'store/actions'
import { Restaurants } from 'components'

const mapDispatchToProps = {
  fetchResRequest,
}

const mapStateToProps = state => ({
  // restaurants: state.restaurants
  restaurants: [
    {
      id: 1,
      name: 'Ала-Тоо',
      capacity: '500',
      sum: 1000,
      kitchen: 2,
      additional_service: 6,
      description: 'У нас крутой ресторан',
      address: 'г.Бишкек Асанбай',
      phone: '+996999778133',
      photo: 'src/restaurant1.jpg',
    },
    {
      id: 2,
      name: 'Нава',
      capacity: '100',
      sum: 800,
      kitchen: 1,
      additional_service: 4,
      description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      address: 'г.Бишкек',
      phone: '+996999778133',
      photo: 'src/restaurant2.jpg',
    },
    {
      id: 3,
      name: 'Сардалия',
      capacity: '100',
      sum: 500,
      kitchen: 1,
      additional_service: 4,
      description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      address: 'г.Бишкек',
      phone: '+996999778133',
      photo: 'src/restaurant3.jpg',
    },
    {
      id: 4,
      name: 'Kim Jong-un"s',
      capacity: '100',
      sum: 666,
      kitchen: 1,
      additional_service: 4,
      description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      address: 'г.Бишкек',
      phone: '+996999778133',
      photo: 'src/restaurant4.jpg',
    },
    {
      id: "Биржа названий ресторанов",
      name: 'Нава',
      capacity: '300',
      sum: 110,
      kitchen: 3,
      additional_service: 2,
      description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      address: 'г.Бишкек',
      phone: '+996999778133',
      photo: 'src/restaurant5.jpg',
    },
    {
      id: 6,
      name: 'Напридумали',
      capacity: '1000',
      sum: 700,
      kitchen: 5,
      additional_service: 7,
      description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      address: 'г.Бишкек',
      phone: '+996999778133',
      photo: 'src/restaurant6.jpg',
    },

  ],


})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
