import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import * as $ from 'jquery';
export var calendar;
(function (calendar_1) {
    var meth = /** @class */ (function () {
        function meth() {
        }
        meth.prototype.aa = function () {
            alert("aaa");
        };
        return meth;
    }());
    calendar_1.meth = meth;
    function render() {
        var a = new meth();
        a.aa();
        var calendarEl = document.getElementById('calendar');
        var calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listWeek'
            }
        });
        calendar.render();
    }
    calendar_1.render = render;
    function renderCalendar() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new Calendar(calendarEl, {
            plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            navLinks: true,
            editable: true,
            selectable: true,
            dayMaxEvents: true,
            select: function (info) {
                alert('selected ' + info.startStr + ' to ' + info.endStr);
                var title = prompt('Enter event title');
                //var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                var date = new Date(info.startStr + 'T00:00:00'); // will be in local time
                if (!isNaN(date.valueOf())) { // valid?
                    calendar.addEvent({
                        title: title,
                        start: date,
                        allDay: true
                    });
                    $.ajax({
                        type: "POST",
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader("XSRF-TOKEN", $("input:hidden[name=\"__RequestVerificationToken\"]").val().toString());
                        },
                        url: "?handler=Aaaa",
                        data: JSON.stringify('testowe dane'),
                        contentType: 'application/json',
                        success: function (data) {
                            alert("fantastycznie");
                        },
                        error: function () {
                            alert("error :(");
                        }
                    });
                }
                else {
                    alert('Invalid date.');
                }
            }
        });
        calendar.render();
    }
    calendar_1.renderCalendar = renderCalendar;
})(calendar || (calendar = {}));
