CONNECT FOUR

PSEUDOCODE

1. CREATE HTML SECTIONS
- header, body, footer
    - header: title, instructions, prompts
    - main: game, player names, board
        - board: empty table (array in js)
    - footer: score

2. CREATE BASIC CSS STYLING
    - use flexbox to outline locations of elements
    - board using radius (divs of square elements)
    - <main> player name sections
    - footer and header styling

3. JS ELEMENTS
    - popup from bootstrap
    -

// pseudocode help //

1. player chooses 1vcomputer or 1v1
2. player(s) input name(s)
3. names appear on screen, board is blank
4. randomized who gets to start
5. player selects column
    - based on column selection, chip falls down as far as possible (cannot fill a full column)
    - record chip location in board (array)
6. switch turns
7. repeat for other player or computer
    - computer must select column for chip
    - attempt to select a column intelligently, rather than randomly (based on existing values in array?)
8. if four chips of same color (value) align (row/column/diagonal) = win
9. if win/lose:
    - announce winner
    - count score at bottom of page
    - option to reset game without restarting browser
10. if draw:
    - announce draw
    - no score
    - option to reset game without restarting browser