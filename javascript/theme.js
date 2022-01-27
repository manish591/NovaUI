let storageValue = 'theme-preference';

const getUserPreference = () => {
    if(localStorage.getItem(storageValue)) {
        return localStorage.getItem(storageValue);
    } else {
        let systemDefault = matchMedia("(prefers-color-scheme: dark)").matches;
        return systemDefault ? 'dark' : 'light';
    }
}

const preferedTheme = {
    value: getUserPreference()
}

const setUserPreference = () => {
    localStorage.setItem(storageValue, preferedTheme.value);
    reflectChangesInRootElement();
}

const reflectChangesInRootElement = () => {
    let rootElement = document.firstElementChild;
    rootElement.setAttribute("data-theme", preferedTheme.value);

    document
    .querySelector('#theme-toggle')
    ?.setAttribute('data-label', preferedTheme.value);
}

const toggleSystemTheme = () => {
    if(preferedTheme.value === 'dark') {
        preferedTheme.value = 'light';
    } else {
        preferedTheme.value = 'dark';
    }
    setUserPreference();
}

reflectChangesInRootElement();

window.onload = () => {
    reflectChangesInRootElement();

    let themeTogglerButton = document.querySelector('#theme-toggle');

    themeTogglerButton.addEventListener('click', toggleSystemTheme);
}