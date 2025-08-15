import { Test } from '@nestjs/testing';
import { TasksRepository } from './task.repository';
import { TasksService } from './tasks.service';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
});

const mockUser = {
  id: 'xixixixix',
  username: 'user1',
  password: 'somePassword',
  tasks: [],
};

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    tasksRepository = module.get(TasksRepository);
  });

  describe('getTasks', () => {
    it('calls TasksRepository.getTasks and returns result', async () => {
      //call tasksService.getTask(), which should then call tasksRepository.getTasks
      //Set the mock resolved value for tasksRepository.getTasks
      tasksRepository.getTasks.mockResolvedValue('testValue');
      const result = await tasksService.getTask(null, mockUser);
      expect(result).toEqual('testValue');
    });
  });
});
