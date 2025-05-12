#With AI:
def display_board(board):
    """Display the current state of the board"""
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---|---|---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---|---|---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")

def player_input(player, board):
    """Ask the player for a valid move"""
    while True:
        try:
            position = int(input(f"Player {player} ({'X' if player == 1 else 'O'}), choose your position (1-9): "))
            if position < 1 or position > 9:
                print("Invalid position. Please choose a number from 1 to 9.")
            elif board[position - 1] != ' ':
                print("That position is already taken. Choose another one.")
            else:
                return position - 1
        except ValueError:
            print("Invalid input. Please enter a number.")

def check_win(board, mark):
    """Check if the player with 'mark' has won"""
    win_conditions = [
        (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Rows
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Columns
        (0, 4, 8), (2, 4, 6)              # Diagonals
    ]
    return any(board[a] == board[b] == board[c] == mark for a, b, c in win_conditions)

def is_board_full(board):
    """Check if the board is full"""
    return ' ' not in board

def play():
    """Main function to control the game"""
    board = [' '] * 9
    current_player = 1
    game_over = False

    print("Welcome to Tic Tac Toe!")
    display_board([str(i+1) for i in range(9)])  # Show positions initially

    while not game_over:
        display_board(board)
        mark = 'X' if current_player == 1 else 'O'
        position = player_input(current_player, board)
        board[position] = mark

        if check_win(board, mark):
            display_board(board)
            print(f"Congratulations! Player {current_player} ({mark}) wins!")
            game_over = True
        elif is_board_full(board):
            display_board(board)
            print("It's a tie!")
            game_over = True
        else:
            current_player = 2 if current_player == 1 else 1

if __name__ == "__main__":
    play()
