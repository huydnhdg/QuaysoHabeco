var reset = {
    init: function () {
        reset.registerEvent();
    },
    registerEvent: function () {
        $('#btnReset').off('click').on('click', function () {
            //var giaithuong = $('#giaithuong').val();
            //var code = "";

            $.ajax({
                url: '/Home/Reset',
                type: 'POST',
                dataType: 'json',
                data: {
                    //giaithuong: giaithuong
                },
                success: function (response) {
                    if (response.success) {

                        alert(response.message);
                        location.reload();
                    }
                }
            });

        });
    },
}
reset.init();