# Application Storage

Easy to use package for saving and loading data to the application storage, both local and session. Works great in whatever Javascript/Typescript framework you are working in without any dependencies. Here is a blog post about using this package: https://passionfordev.com/easily-save-and-load-user-settings/.

## Installation

```
$ npm i application-storage
```

## Examples

#### Javascript Example

This is a basic example of saving and loading a username so that it will remember what they entered last time. The first time this code runs it will prompt the user for their name with a blank default value. The second time it runs it will prompt the user for their name and will default to the value they entered last time. After they enter their name it will update the value.

```
import appStorageFactory from 'application-storage';

var appStorage = appStorageFactory("nameOfPerson", "local");
var name = prompt("What is your name", appStorage.getValue());
appStorage.setValue(name);
```

#### React/Typescript Example

This makes saving and loading values in React effortless, which is great for components where you want to remember what the user had before, such as viewing preferences or customizations.

```
import * as React from 'react';
import appStorageFactory from 'application-storage';

export class RememberName extends React.Component<any> {
    readonly appStorage = appStorageFactory("name", 'local');
    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.appStorage.setValue(event.target.value);
        // Some event that causes a re-render
    }

    render() {
        return (
            <div>
                <label>Name: </label>
                <input value={this.appStorage.getValue()} onChange={this.onChange} />
            </div>
        );
    }
}
```

It is just the three parts, getting an instance for your class, saving the value with an onChange event and using it as the value for the object. The gotcha is setting the value will not cause a re-render, so inside of the event you have to do something here that causes a re-render. This would normally be an update to state that tracks name.

#### React/Typescript with State

Here is a more realistic example with the user able to enter a form field and have it save to state, so you can act upon it in your code and do what you need with it in a normal React way, but also caching it to the storage as shown above:

```
import * as React from 'react';
import appStorageFactory from 'application-storage';

export class RememberName extends React.Component<any, { name: string }> {
    readonly appStorage = appStorageFactory("name", 'local');

    state = {
        name: this.appStorage.getValue()
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: event.target.value });
        this.appStorage.setValue(event.target.value);
    }

    render() {
        return (
            <div>
                <label>Name: </label>
                <input value={this.state.name} onChange={this.onChange} />
            </div>
        );
    }
}
```

## Requirements

The only requirement is that the browser supports localStorage and sessionStorage, which has been around for a while, and is supported as far bas as IE8. For a full list of browser compatibility visit https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage.
