export default [
    {
        id: 11,
        name: 'Dashboard',
        img: require('../icon/dashboard.png')
    },
    {
        id: 21,
        name: 'Destination',
        img: require('../icon/destination.png'),
        openIcon: true,
        subMenu: [
            {
                id: 3_1,
                title: "All Destination",
                path: "all-destination"
            },
            {
                id: 3_2,
                title: "Add new Destination",
                path: "add-new-destination"
            },
            {
                id: 3_3,
                title: "All categories",
                path: "all-categories"
            },
            {
                id: 3_4,
                title: "Add new categories",
                path: "add-new-categories"
            }
        ]
    },
    {
        id: 31,
        name: 'Tour',
        img: require('../icon/tour.png'),
        openIcon: true,
        subMenu: [
            {
                id: 3_1,
                title: "All tours",
                path: "all-tour"
            },
            {
                id: 3_2,
                title: "Add new tour",
                path: "add-new-tour"
            },
            {
                id: 3_3,
                title: "All categories",
                path: "all-categories"
            },
            {
                id: 3_4,
                title: "Add new categories",
                path: "add-new-categories"
            }
        ]
    },
    {
        id: 4,
        name: 'Services',
        img: require('../icon/services.png'),
        openIcon: true,
        subMenu: [
            {
                id: 4_1,
                name: "Hotels",
                img: require('../icon/hotels.png')
            },
            {
                id: 4_2,
                name: "Food",
                img: require('../icon/food.png')
            },
            {
                id: 4_3,
                name: "Cars",
                img: require('../icon/cars.png')
            },
            {
                id: 4_4,
                name: "Message",
                img: require('../icon/message.png')
            },
            {
                id: 4_5,
                name: "Settings",
                img: require('../icon/settings.png')
            },
            {
                id: 4_6,
                name: "Help",
                img: require('../icon/help.png')
            }
        ]
    },
    {
        id: 22,
        name: "Log Out",
        img: require("../icon/logOut.png")
    }
]
