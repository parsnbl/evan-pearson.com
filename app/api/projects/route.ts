import projects from './project.json';
import { ProjectData } from '../../../declarations';

const typedProjectData: ProjectData[] = projects;

export async function GET() {
  return Response.json(typedProjectData);
}
