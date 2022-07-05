import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
class TasksService {
  constructor({ url = 'http://localhost:9000/tasks', timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getTasks() {
    return this.http.get('/');
  }

  async postTasks(text) {
    return this.http.post('/', {
      headers: {
        text
    },
    });
  }
}

export default TasksService;
