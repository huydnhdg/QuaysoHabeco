var quayso = {
    init: function () {
        quayso.registerEvent();
    },

    registerEvent: function () {

        $('#btnSend').off('click').on('click', function () {
        document.getElementById("btnSend").disabled = true;
            var giaithuong = $('#giaithuong').val();
            var code = "";
            var phone = "";
      
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

                        if (giaithuong === "0"  ) {//quay tung giai 1
                            if (giaithuong === "0") {
                                giaithuong = "Giải chính thức";
                            }
                            if (response.tv === 0) {
                                alert("Đã quay hết số lượng giải thưởng!.");
                            }
                            else {
                                
                                code = response.codearray;
                                phone = response.phonearray;
                                var tv = response.tv;
                                var stt = response.count;
                                var status = response.tv.Status;
                                $('#solan').html(response.count)
                            

                                $('#code0')
                                    .animateNumber(
                                        {
                                            number: 10,
                                        },
                                        'normal'
                                    );
                                $('#code0')
                                    .animateNumber(
                                        {
                                            number: 10,
                                        },
                                        'normal'
                                    );
                                $('#code0')
                                    .animateNumber(
                                        {
                                            number: 10,
                                        },
                                        'normal'
                                    );
                                $('#code0')
                                    .animateNumber(
                                        {
                                            number: 10,
                                        },
                                        'normal'
                                    );
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
                                        'normal'
                                    );
                                $('#code1')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code1')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code1')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
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
                                        'normal'
                                    );
                                $('#code2')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code2')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code2')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
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
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code3')
                                    .animateNumber(
                                        {
                                            number: 10
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
                                        'normal'
                                    );
                                $('#code4')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code4')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code4')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
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
                                        'normal'
                                    );
                                $('#code5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
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
                                        'normal'
                                    );
                                $('#code6')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code6')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#code6')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
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
                             

                                $('#phone0')
                                    .animateNumber(
                                        {
                                            number: 10,
                                        },
                                        'normal'
                                    );
                                $('#phone0')
                                    .animateNumber(
                                        {
                                            number: 10,
                                        },
                                        'normal'
                                    );
                                $('#phone0')
                                    .animateNumber(
                                        {
                                            number: 10,
                                        },
                                        'normal'
                                    );
                                $('#phone0')
                                    .animateNumber(
                                        {
                                            number: 10,
                                        },
                                        'normal'
                                    );
                                $('#phone0')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone0').html(phone.substring(0, 1))
                                        }
                                    );
                                $('#phone1')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone1')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone1')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone1')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone1')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone1').html(phone.substring(1, 2))
                                        }
                                    );
                                $('#phone2')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone2')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone2')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone2')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone2')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone2').html(phone.substring(2, 3))
                                        }
                                    );
                                $('#phone3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone3')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone3').html(phone.substring(3, 4))
                                        }
                                    );
                                $('#phone4')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone4')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone4')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone4')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone4')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone4').html(phone.substring(4, 5))
                                        }
                                    );
                                $('#phone5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone5')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone5').html(phone.substring(5, 6))
                                        }
                                    );
                                $('#phone6')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone6')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone6')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone6')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone6')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone6').html(phone.substring(6, 7))
                                        }
                                    );
                                $('#phone7')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone7')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone7')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone7')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone7').html(phone.substring(7, 8))
                                        }
                                    );
                                $('#phone8')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone8')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone8')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone8')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone8').html(phone.substring(8, 9))
                                        }
                                    );
                                $('#phone9')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone9')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone9')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal'
                                    );
                                $('#phone9')
                                    .animateNumber(
                                        {
                                            number: 10
                                        },
                                        'normal',
                                        function () {
                                            $('#phone9').html(phone.substring(9, 10))
                                        }
                                );
                      
                              
                                if (status === 0) {
                                    setTimeout(function () {
                                        $('#table-content1').find('tbody').append("<tr><th>"
                                            + stt + "</th><th>"
                                            + tv.Code + "</th><th>"
                                            + tv.Phone + "</th><tr>"
                                        );
                                        document.getElementById("btnSend").disabled = false;
                                      
                                    }, 3000);


                  
                                }
                                else {
                                    setTimeout(function () {
                                        $('#table-content2').find('tbody').append("<tr><th>"
                                            + stt + "</td><th>"
                                            + tv.Code + "</td><th>"
                                            + tv.Phone + "</th><tr>"
                                        );
                                        document.getElementById("btnSend").disabled = false;
                                    }, 3000);

                                }
                           


                            }

                        } else {//quay giai khuyen khich

                            var words = response.tv;
                            var html;

                            $.each(words, function (i, word) {
                                ++i;
                                html += '<tr><th>'
                                    + i + '</td><th>'
                                    + tv.Code + '</td><th>'
                                    + word.Phone + '</td><th>'
                                    ;
                            });
                            $("#table-content2").find('tbody').append(html);
                            location.reload();
                        }
                    }
                }
            });

        });
    },

}
quayso.init();
