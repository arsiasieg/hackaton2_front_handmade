import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../shared/models/project.model';
import { Multiservice } from '../shared/services/multi.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  listProjects : Project[];
  listOldProjects: Project[];
  project: Project;

  public constructor(private titleService: Title, private multiservices: Multiservice, private router: Router, private route: ActivatedRoute) {
    this.listProjects = [];
    this.listOldProjects = [];
    this.project = new Project();
  }

  ngOnInit(): void {
    this.multiservices.getAllProject().subscribe(listProject =>{
      listProject.forEach((project : any) => {
        if(!project.isFinished){
          this.listProjects.push(project)
        } else {
          this.listOldProjects.push(project)
        }
      });
    })
    this.titleService.setTitle('List project')
  }

  getProjectId(id: number){
    this.multiservices.getProjectId(id)
    this.router.navigate(['/project'])
  }

  deleteProject(){
    // this.multiservices.deleteProject(this.project.id);
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.navigate(['./'], {relativeTo: this.route})
  }

  stockProject(project : Project){
    this.project = project;
  }

}
