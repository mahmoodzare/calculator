
$("document").ready(
    function () {
        let input_value = $("#input")
        let output_value = $('#output')


        $(".num-value").click(
            function () {
                let value = $(this).text();
                input_value.val(input_value.val() + value);
            }
        )
        $(".ac").click(
            function () {
                output_value.val('');
                input_value.val('');

            }
        )
        $(".equal").click(
            function () {

                output_value.val(eval(input_value.val()))


            }
        )
        $(document).keypress(function (event) {
            if (event.key === "Enter") {
                output_value.val(eval(input_value.val()))
            }
        });


        $(document).keypress(function (event) {
            if (event.key === "Enter") {
               
                output_value.val(eval(input_value.val()));
            }
        });


    }
)



