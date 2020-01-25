const tangrams = {

    house: {
        pieces: [
            [9, -6, 5, -8, 9, -8],
            [5, -6, 5, -8, 9, -6],
            [7, -4, 5, -6, 9, -6]
        ],
        path: "M850 700 L750 800 L 750 900 L 950 900 L 950 800 Z",
        pathX: 900
    },

    boat: {
        pieces: [
            [1, 3, 4, 3, 4, 0],
            [4, 0, 6, 0, 4, 3],
            [4, 3, 6, 0, 9, 3],
            [6, 3, 10, 3, 8, 5],
            [6, 3, 8, 5, 6, 7],
            [0, 4, 3, 7, 6, 4],
            [3, 7, 6, 4, 6, 10]
        ],
        path: "M800 0 L800 150 L 1000 350 L 950 350 L 800 500 L 700 500 L 550 350 L 800 350 L 800 300 L 500 300 Z",
        pathX: 2000
    },

    fish: {
        pieces: [
            [1, 5, 5, 1, 5, 5],
            [5, 2, 7, 4, 5, 4],
            [7, 4, 9, 2, 9, 4],
            [7, 4, 9, 4, 9, 6],
            [7, 4, 7, 6, 9, 6],
            [7, 6, 9, 6, 9, 8],
            [7, 4, 5, 4, 7, 6],
            [5, 4, 5, 6, 7, 6],
            [5, 6, 5, 8, 7, 6],
            [1, 5, 5, 5, 5, 9]
        ],
        path: "M750 50 L 750 100 L850 200 L 950 100 L 950 400 L 850 300 L 750 400 L 750 450 L 550 250 Z",
        pathX: 1400
    },

    cat: {
        pieces: [
            [2, -10, 6, -10, 6, -6],
            [6, -10, 8, -10, 8, -8],
            [8, -10, 10, -8, 8, -8],
            [3, -9, 6, -6, 3, -3],
            [3, -6, 1, -4, 3, -3],
            [3, -3, 1, -2, 3, -1],
            [3, -3, 5, -2, 3, -1],
            [1, -2, 1, 0, 3, -1],
            [3, -1, 5, -2, 5, 0]
        ],
        path: "M550 500 L 650 550 L 750 500 L 750 600 L 650 650 L 800 800 L 800 1000 L 900 900 L 1000 900 L 900 1000 L 600 1000 L 650 950 L 650 650 L 550 600 Z",
        pathX: 2200
    }
}

export default tangrams;