package org.sallaire.controller;

import org.sallaire.controller.conf.CurrentUser;
import org.sallaire.dto.user.UserDto;
import org.sallaire.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PutMapping(value = "/user/{id}")
	public void saveUser(@PathVariable("id") String id, @RequestParam("password") String password, @RequestParam("role") String role, @CurrentUser UserDto currentUser) {
		userService.saveUser(id, password, role, currentUser);
	}

	@DeleteMapping(value = "/user/{id}")
	public void deleteUser(@PathVariable("id") String id, @CurrentUser UserDto currentUser) {
		userService.deleteUser(id, currentUser);
	}

	@GetMapping(value = "/user/{id}")
	public UserDto getUser(@PathVariable("id") String id, @CurrentUser UserDto currentUser) {
		return userService.getUser(id, currentUser);
	}

	@GetMapping(value = "/user")
	public UserDto getUser(@CurrentUser UserDto currentUser) {
		return currentUser;
	}

}
