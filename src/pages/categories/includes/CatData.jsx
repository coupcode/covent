import img from '../../catDetails/includes/items/imgs/joy.png'

export const CatData = [
    {
        id: 1,
        cat_name: 'King of Kicks',
        cat_img: img,
        no_of_noms: 15,
    },
    {
        id: 2,
        cat_name: 'Swag Lord',
        cat_img: img,
        no_of_noms: 5,
    },
    {
        id: 3,
        cat_name: 'Ladies Man',
        cat_img: img,
        no_of_noms: 25,
    },
    {
        id: 4,
        cat_name: 'Swagger',
        cat_img: img,
        no_of_noms: 3,
    },
    {
        id: 5,
        cat_name: 'Best Artist',
        cat_img: img,
        no_of_noms: 12,
    },
    {
        id: 6,
        cat_name: 'Best Rapper',
        cat_img: img,
        no_of_noms: 7,
    },
    {
        id: 7,
        cat_name: 'Best young Artist',
        cat_img: img,
        no_of_noms: 9,
    },
    {
        id: 8,
        cat_name: 'Vocalist',
        cat_img: img,
        no_of_noms: 4,
    },
    {
        id: 9,
        cat_name: 'PGM',
        cat_img: img,
        no_of_noms: 15,
    },
    {
        id: 10,
        cat_name: 'Best Chaplain',
        cat_img: img,
        no_of_noms: 15,
    },
    {
        id: 11,
        cat_name: 'Osofo of the Year',
        cat_img: img,
        no_of_noms: 15,
    },
]

export const color = () => {
    let sections = [10, 50, 100, 150, 200, 225]
    return `rgba(
        ${sections[Math.floor(Math.random() * 6)]},
        ${sections[Math.floor(Math.random() * 6)]},
        ${sections[Math.floor(Math.random() * 6)]}, .07
    )`
}