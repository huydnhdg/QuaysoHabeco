var quayso = {
    init: function () {
        quayso.registerEvent();
    },
    registerEvent: function () {
        $('#btnSend').off('click').on('click', function () {
            var giaithuong = $('#giaithuong').val();
            var code = "";

            $.ajax({
                url: '/Home/Quayso',
                type: 'POST',
                dataType: 'json',
                data: {
                    giaithuong: giaithuong
                },
                success: function (response) {
                    if (response.success) {

                        var mess = response.message;

                        if (giaithuong == "0" || giaithuong == "1" || giaithuong == "2") {//quay tung giai 1
                            if (giaithuong == "0") {
                                giaithuong = "Giải đặc biệt";
                            } else if (giaithuong == "1") {
                                giaithuong = "Giải nhất";
                            } else if (giaithuong == "2") {
                                giaithuong = "Giải nhì";
                            }
                            else if (giaithuong == "3") {
                                giaithuong = "Giải khuyến khích";
                            }
                            if (response.tv == null) {
                                alert("Đã quay hết số lượng giải thưởng!.");
                            }
                            else {
                                code = response.codearray;
                                var tv = response.tv;
                                var stt = $('table').find('tr').length;

                                
                                $('#code0')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code0').html(code.substring(0, 1))
                                    }
                                    );
                                
                                $('#code1')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code1').html(code.substring(1, 2))
                                    }
                                    );
                                
                                $('#code2')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code2').html(code.substring(2, 3))
                                    }
                                    );
                                
                                $('#code3')
                                    .animateNumber(
                                    {
                                        number: 
                                    },
                                    'normal',
                                    function () {
                                        $('#code3').html(code.substring(3, 4))
                                    }
                                    );
                                
                                $('#code4')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code4').html(code.substring(4, 5))
                                    }
                                    );
                                
                                $('#code5')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code5').html(code.substring(5, 6))
                                    }
                                    );
                                
                                $('#code6')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code6').html(code.substring(6, 7))
                                    }
                                );

                                $('#code7')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code7').html(code.substring(7, 8))
                                    }
                                    );
                                
                                $('#code8')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code8').html(code.substring(8, 9))
                                    }
                                );
                                
                                $('#code9')
                                    .animateNumber(
                                    {
                                        number: 10
                                    },
                                    'normal',
                                    function () {
                                        $('#code9').html(code.substring(9, 10))
                                    }
                                    );
                                setTimeout(function () {
                                    $('table').find('tbody').prepend("<tr><td>"
                                        + stt + "</td><td>"
                                        + tv.Code + "</td><td>"
                                        + tv.PhoneXXX + "</td><td>"
                                        + tv.Status + "</td></td>");
                                }, 3000);


                            }

                        } else {//quay giai khuyen khich
                            var words = response.dskk;
                            var html;

                            $.each(words, function (i, word) {
                                ++i;
                                html += '<tr><td>'
                                    + i + '</td><td>'
                                    + word.Code + '</td><td>'
                                    + word.PhoneXXX + '</td><td>'
                                    + word.Status + '</td></tr> ';
                            });
                            $("#table").find('tbody').append(html);
                            location.reload();
                        }
                    }
                }
            });

        });
    },

}
quayso.init();
