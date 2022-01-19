# README #

Print rows from Recursion Tree

 ```
// Output:
// 1
// 2, 7
// 3, 6, 8, 9
// 4, 5, 10, 11, 12, 13
// 14

{
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
            left: {
                value: 4
            },
            right: {
                value: 5
            }
        },
        right: {
            value: 6
        }
    },
    right: {
        value: 7,
        left: {
            value: 8,
            left: {
                value: 10
            },
            right: {
                value: 11
            }
        },
        right: {
            value: 9,
            left: {
                value: 12
            },
            right: {
                value: 13,
                right: {
                    value: 14
                }
            }
        }
    }
}
 ```
