import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
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
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            //plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            initialDate: '2018-01-12',
            navLinks: true,
            editable: true,
            dayMaxEvents: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2018-01-01',
                },
                {
                    title: 'Long Event',
                    start: '2018-01-07',
                    end: '2018-01-10'
                },
                {
                    //groupId: 999,
                    title: 'Repeating Event',
                    start: '2018-01-09T16:00:00'
                },
                {
                    //groupId: 999,
                    title: 'Repeating Event',
                    start: '2018-01-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2018-01-11',
                    end: '2018-01-13'
                },
                {
                    title: 'Meeting',
                    start: '2018-01-12T10:30:00',
                    end: '2018-01-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2018-01-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2018-01-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2018-01-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2018-01-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2018-01-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-01-28'
                }
            ]
        });
        calendar.render();
    }
    calendar_1.renderCalendar = renderCalendar;
})(calendar || (calendar = {}));
