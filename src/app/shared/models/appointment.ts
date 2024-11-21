import {MeetingType} from '../enum/MeetingType';

export interface Appointment {
  firstName: string;
  lastName: string;
  date: Date;
  description: string;
  email: string;
  meetingType : MeetingType;
  atHome: boolean;
  dates?: Date[];
}
