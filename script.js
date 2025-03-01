$(document).ready(function() {
    let turn = true;
    const winnerPattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    $(".box").on("click", function() {
        if (turn) {
            $(this).text("X").css({"background-color": "#1abc9c", "color": "#ffffff"});
        } else {
            $(this).text("O").css({"background-color": "#f39c12", "color": "#ffffff"});
        }
        turn = !turn;
        $(this).prop("disabled", true);
        checkWinner();
    });

    function checkWinner() {
        for (let pattern of winnerPattern) {
            let posval1 = $(".box").eq(pattern[0]).text();
            let posval2 = $(".box").eq(pattern[1]).text();
            let posval3 = $(".box").eq(pattern[2]).text();
            if (posval1 && posval1 === posval2 && posval2 === posval3) {
                $("#msg").html(`🎉 Congratulations! <span style="color: yellow;">${posval1}</span> Wins!`);
                $(".box").prop("disabled", true);
                return;
            }
        }
        if ($(".box").text().length === 9) {
            $("#msg").html("😲 It's a Draw!");
        }
    }

    $("#restart").on("click", function() {
        $(".box").text("").prop("disabled", false).css({"background-color": "#ecf0f1", "color": "#2c3e50"});
        turn = true;
        $("#msg").html("Let's Play the Game");
    });
});