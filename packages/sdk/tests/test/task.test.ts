import { test, describe, expect } from 'vitest';

describe('Task Methods', () => {
  test('should be able to create a task', async context => {
    const { client } = context;
    const result = await client.tasks.create({
      generatorName: 'test',
    });
    expect(result).toBeDefined();
    expect(result.taskId).toBeDefined();
  });

  test('should be able to get all tasks', async context => {
    const { client } = context;
    const result = await client.tasks.list();
    expect(result).toBeDefined();
    expect(result.tasks).toBeDefined();
  });

  test('should be able to get a task by id', async context => {
    const { client } = context;
    const response = await client.tasks.create({
      generatorName: 'test',
    });
    const tasksResponse = await client.tasks.get({
      taskId: response.taskId,
    });
    expect(tasksResponse).toBeDefined();
    expect(tasksResponse.task).toBeDefined();
    expect(tasksResponse.task.taskId).toBe(response.taskId);
  });
});
