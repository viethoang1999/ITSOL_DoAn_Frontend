import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent implements OnInit {
  employee: Employee;
  btnDisabled=false;
  url ='';


  constructor(private rest: RestApiService,
    private data: DataService,
    private router: Router) {
      this.employee=new Employee();
     }

  ngOnInit(): void {
  }
  validate(){
    return true;
  }

  async login(){
    this.btnDisabled=true;

    if(this.validate()){
      this.rest.post(this.url,this.employee).then(data=>{
        let value=data as{employeeId : string ,token:string};
        localStorage.setItem('token',value.token);
        this.router.navigate(['/'])
      })
      .catch(error=>{
        this.data.console.error(error['error']);
        this.btnDisabled=false;
        
      })
      
    }
  }

}
