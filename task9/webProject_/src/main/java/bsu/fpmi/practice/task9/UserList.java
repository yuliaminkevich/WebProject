package bsu.fpmi.practice.task9;

import java.util.ArrayList;
import java.util.List;

public class UserList {
    private List<User> users;
    private User currentUser;

    public UserList(){
        users = new ArrayList<>();
        users.add(new User("nattallius","nata"));
        users.add(new User("yuliaminkevich","55555"));
        users.add(new User("alex","alex"));
        currentUser = new User("nattallius","nata");
    }

    public boolean include(User user){
        return users.stream().anyMatch(user::equals);
    }

    public List<User> getUsers() {
        return users;
    }

    public User getCurrentUser() {
        return currentUser;
    }

    public void setCurrentUser(User user){
        if(user!=null) {
            currentUser = user;
        }
    }
}
