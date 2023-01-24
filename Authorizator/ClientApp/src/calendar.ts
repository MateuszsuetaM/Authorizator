import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import * as $ from 'jquery'

export namespace calendar {
    export class meth {
        aa(): void {
            alert("aaa");
        }
    }
    export function render() {
        let a = new meth();
        a.aa();

        var calendarEl = document.getElementById('calendar');

        let calendar = new Calendar(calendarEl, {
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

    export function renderCalendar() {
        var calendarEl = document.getElementById('calendar');

        var calendar = new Calendar(calendarEl, {
            plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            selectable: true,
            dayMaxEvents: true, // allow "more" link when too many events
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
                            xhr.setRequestHeader("XSRF-TOKEN", $(`input:hidden[name="__RequestVerificationToken"]`).val().toString());
                        },
                        url: "?handler=Aaaa",
                        data: JSON.stringify('testowe dane'),
                        contentType: 'application/json',
                        success: function (data) {
                            alert("fantastycznie")

                        },
                        error: () => {
                            alert("error :(")
                        }
                    });

                } else {
                    alert('Invalid date.');

                }
            }
        });

        calendar.render();
    }
}