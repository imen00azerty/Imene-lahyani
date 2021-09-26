export class MemberListComponent implements OnInit { 
  displayedColumns: string[] = ["id", "cin", "name", "type", "cv", "createdDate","actions"];
datasource : any[]=[
  { id : '1245',
  cin : '12546987',
  name: 'imene lahyani',
  createdDate: '2020-10',
  cv: 'lien',
  type: 'TEACHER'
  },
]
