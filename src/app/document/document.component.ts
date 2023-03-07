import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {

  PROB_STATEMENT='Team lead is managing a group of team members. Each members sending a daily status report about the work they did at the end of day. Members are using mail to send report. Team lead needs to review the reports and acknowledge it and sent suggestions';

  LEAD_PROBLEM=['Too much emails', 
  'High chance for not able to review reports'  ,
   'Unable to filter particular member report' ,
   'Unable to categories important reports',
  'Much Time consuming',
  'Effect on lead work efficiency',
  'No seperate platform for report',
  'Unable to maintain report for longer time'];

  MEMBER_PROBLEM=[
   ' Use of work mail',
   ' Unaware of report format',
    'Half information remain same',
    'More time consuming',
    'No platform for maintaining static info',
    'less focus on actual content '
  ];

  EXTRACT='Based on understanding the problems of Team Lead and Member, they need a seperate platform instead of work email ie. an application where';

  LEAD_CAN=[
    'Review the report as per his convienence',
    'Able to filter report on member name basis',
    'Able to categorize report importance',
    'Can be able to review report anytime',
    'Able to Store report for longer time',
    'Provide suggestions and comments on report',
    'Analyse the work progress of member based on stored data',
    'No need to use email',
    'Less pressure to acknowledge report on time',
    'Able to set report format',
   ' Able to mention expected information by member'
  ];
  MEMBER_CAN=[
    'Have a particular report format',
    'Auto populate repeated information',
    'Able to create our own profile',
    'No need to use email',
    'Send report to lead in desired format'
  ];

  SOLUTION='A web application needs to be created which will give facility to both Team lead and Member to manage daily reports instead of mail. In this application Members can send reports to TeamLead and TeamLead can provide his comment and suggestions to it.';

  FACILITY=[
     'Reports Storage',
' Paricular Report format',
'Review and analyse report anytime',
'Maintain members profile',
'Analyse work progress',
'Time and Date wise sorting' ,
  ];

  DEV_IDEA='As this is a web application, its development will be divided in 2 parts.. Frontend and Backend .FrontEnd of application will be designed with Angular framework and for backend will be using Google Firebase..';

FRONTEND=['HTML','CSS','Bootstrap','Typescript','Angular framework'];
BACKEND=['Google Firebase noSql cloud data storage'];

DEPLOY='No any paid services are used for deploying this application. For deploying frontend angular application , we are using Github Pages.. And for Backend apis and database.. we are using google Firebase, its a NoSQL cloud based data storage system';

}
