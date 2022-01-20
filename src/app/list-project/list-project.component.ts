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

  public constructor(private titleService: Title, private multiservices: Multiservice, private router: Router, private route: ActivatedRoute) {
    this.listProjects = [];
    this.listOldProjects = [];


  }

  ngOnInit(): void {
    this.multiservices.listProject.forEach(project => {
      if(!project.isFinished){
        this.listProjects.push(project)
      } else {
        this.listOldProjects.push(project)
      }
    });
    this.titleService.setTitle('List project')
  }

  setProject(project: Project){
    this.multiservices.setProject(project)
    this.router.navigate(['/project'])
  }

  deleteProject(){
    this.multiservices.deleteProject();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['./'], {relativeTo: this.route})
  }

}
