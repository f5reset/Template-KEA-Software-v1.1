(function ($) {
    "use strict";

    $(function () {
        /* ------------------------------------------------------------------------- *
         * SWEET ALERT
         * ------------------------------------------------------------------------- */
        var $sweetAlert = $('[data-sweet-alert]');

        $sweetAlert.on('click', function (e) {
            e.preventDefault();

            var $t = $(this),
                $swa = $t.data('sweet-alert');

            switch ( $swa ) {
                case 'log-out':
                    swal({
                        title: 'Đăng xuất!',
                        type: 'warning',
                        text: 'Bạn thực sự muốn đăng xuất?',
                        html:
                            '<form action="" method="post">\n' +
                            '    <p>Bạn thực sự muốn đăng xuất</p> \n' +
                            '    <button type="submit" name="btn-logout" class="btn btn-danger">Đăng xuất</button>\n' +
                            '<form>',
                        showConfirmButton: false,
                        showCloseButton: true,
                    });
                    break;

                case 'action-xoa':
                    swal( {
                        title: 'Bạn muốn xóa?',
                        text: "Hành động này không thể hoàn hồi!",
                        type: 'warning',
                        showConfirmButton: true,
                        showCancelButton: true,
                        customClass: 'action-xoa',
                        confirmButtonText: 'Xóa',
                        confirmButtonColor: '#ff4040',
                        cancelButtonText: 'Hủy'
                    });
                    break;

                case 'action-disable':
                    swal( {
                        html:
                            '<form action="#"><div class="form-group">\n' +
                            '      <label for="delay">Delay</label> <br>\n' +
                            '      <input type="number" class="form-control" id="delay" placeholder="Thời gian tạm dừng (giây)">\n' +
                            '</div><button type="submit" class="btn btn-success">Delay</button><form>',
                        showConfirmButton: false,
                        showCloseButton: true,
                    });
                    break;

                case 'action-shutdown':
                    swal( {
                        title: 'Bạn muốn Shut down?',
                        type: 'warning',
                        showConfirmButton: true,
                        showCancelButton: true,
                        customClass: 'action-shutdown',
                        confirmButtonText: 'Shut down',
                        confirmButtonColor: '#ff4040',
                        cancelButtonText: 'Hủy'
                    });
                    break;

                case 'action-reload':
                    swal( {
                        title: 'Bạn muốn khởi động lại Server?',
                        type: 'warning',
                        showConfirmButton: true,
                        showCancelButton: true,
                        customClass: 'action-reload',
                        confirmButtonText: 'Khởi động lại',
                        confirmButtonColor: '#17a2b8',
                        cancelButtonText: 'Hủy'
                    });
                    break;

                case 'action-enable':
                    swal( {
                        title: 'Bạn muốn khởi chạy Server?',
                        type: 'warning',
                        showConfirmButton: true,
                        showCancelButton: true,
                        customClass: 'action-enable',
                        confirmButtonText: 'Khởi chạy',
                        confirmButtonColor: '#28a745',
                        cancelButtonText: 'Hủy'
                    });
                    break;
            }
        });
    });
}(jQuery));