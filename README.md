# application-storage

Easy to use package for saving and loading data to the application storage, both local and session. Works great in whatever Javascript/Typescript framework you are working in without any dependencies. The only requirement is that the browser supports localStorage and sessionStorage, which has been around for a while, and is supported as far bas as IE8. For a full list of browser compatibility visit https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage.

### Basic Javascript Example

This is a basic example of saving and loading a username so that it will remember what they entered last time. The first time this code runs it will prompt the user for their name with a blank default value. The second time it runs it will prompt the user for their name and will default to the value they entered last time. After they enter their name it will update the value.

```
import appStorageFactory from 'application-storage';

var appStorage = appStorageFactory("nameOfPerson", "local");
var name = prompt("What is your name", appStorage.getValue());
appStorage.setValue(name);
```

### React/Typescript Example

This makes saving and loading values in React effortless, which is great for components where you want to remember what the user had before, such as viewing preferences or customizations.

```
import appStorageFactory from 'application-storage';

export class RememberName extends React.Component<any> {
    readonly appStorage = appStorageFactory("name", 'local');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.appStorage.setValue(event.target.value);
    }

    render() {
        <input value={this.appStorage.getValue()} onChange={onChange}/>;
    }
}
```

It is just the three parts, getting an instance for your class, saving the value with an onChange event and using it as the value for the object.
