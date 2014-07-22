/**
 * Created by cenk on 22/07/14.
 */

(function ($) {

    $(function () {

        $('.customdaterangepicker').daterangepicker(
            {
                ranges: {
                    'Son 3 Dakika': [moment().subtract('minutes', 3), moment()],
                    'Son 30 Dakika': [moment().subtract('minutes', 30), moment()],
                    'Son 1 Saat': [moment().subtract('hours', 1), moment()],
                    'Son 6 Saat': [moment().subtract('hours', 6), moment()],
                    'Today': [moment().startOf('days'), moment()]
                },
                startDate: moment().subtract('minutes', 3),
                endDate: moment(),
                timePicker: true,
                timePickerIncrement: 30,
                format: 'DD.MM.YYYY HH:mm:ss'

            },
            function (start, end) {
                $('.daterangepickerForm').submit();
            }
        );

    });

})(jQuery);