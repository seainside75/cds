import {Component, Input} from '@angular/core';
import {Action} from '../../model/action.model';
import {Application} from '../../model/application.model';
import {Pipeline} from '../../model/pipeline.model';
import {Project} from '../../model/project.model';

@Component({
    selector: 'app-project-breadcrumb',
    templateUrl: './project-breadcrumb.html',
    styleUrls: ['./project-breadcrumb.scss']
})
export class ProjectBreadcrumbComponent {

    @Input() project: Project;
    @Input() application: Application;
    @Input() pipeline: Pipeline;
    @Input() action: Action;
    @Input() version = 0;
    @Input() buildNumber = 0;
    @Input() envName: string;
    @Input() branch: string;
    @Input() remote: string;
    @Input() appVersion: number;
    @Input() workflow: string;
    @Input() workflowRun: string;
    @Input() workflowRunNode: string;
    @Input() wPipeline: string;

    constructor() {
    }

    getProjectQueryParams(): {} {
        let queryParams = {};
        if (this.pipeline) {
            queryParams['tab'] = 'pipelines';
        } else if (this.application) {
            queryParams['tab'] = 'applications';
        } else if (this.workflow) {
            queryParams['tab'] = 'workflows';
        }

        return queryParams;
    }

    getApplicationQueryParams(): {} {
        let queryParams = {
          remote: this.remote || '',
          branch: this.branch || ''
        };

        return queryParams;
    }

    getPipelineQueryParams(): {} {
        let queryParams = {
          version: this.version || '',
          remote: this.remote || '',
          buildNumber: this.buildNumber || '',
          envName: this.envName || '',
          branch: this.branch || ''
        };

        if (this.application) {
          queryParams['application'] = this.application.name;
        }

        return queryParams;
    }

    getBuildQueryParams(): {} {
        let queryParams = {
          envName: this.envName || '',
          branch: this.branch || '',
          remote: this.remote || ''
        };

        return queryParams;
    }
}
