package com.example.stellar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.stellar.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
