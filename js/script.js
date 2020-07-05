{
    const init = () => {
        initThemeChangerButton();
        initDogFeederButton();
        initDoneCheckers();
    };

    const initThemeChangerButton = () => {
        const themeChanger = document.querySelector(".js-themeChanger");
        themeChanger.addEventListener("click", () => {
            changeTheme();
        });
    };

    const initDogFeederButton = () => {
        const dogFeeder = document.querySelector(".js-dogFeeder");
        dogFeeder.addEventListener("click", () => {
            feedDog(dogFeeder);
        });
    };

    const initDoneCheckers = () => {
        const doneCheckers = document.querySelectorAll(".js-doneChecker");
        doneCheckers.forEach(checker => {
            checker.addEventListener("click", () => {
                switchDoneChecker(checker);
            });
        });
    }

    const changeTheme = () => {
        const container = document.querySelector(".container");
        const sectionHeaders = document.querySelectorAll(".js-sectionHeader");

        container.classList.toggle("contaniner--dark");
        sectionHeaders.forEach(header => {
            header.classList.toggle("section__header--light");
        });
    }

    const feedDog = (dogFeeder) => {
        const bone = document.querySelector(".js-bone");
        bone.classList.toggle("aside__image--hidden");
        if (dogFeeder.innerText === "Nakarm piesełka") {
            dogFeeder.innerText = "Omnomnomnom";
        } else {
            dogFeeder.innerText = "Nakarm piesełka";
        }
    }

    const switchDoneChecker = (checker) => {
        switch (checker.innerText) {
            case ("✖"):
                checker.innerText = "✔";
                break;
            case ("✔"):
                checker.innerText = "✖";
        }
    }

    console.log("Hello from the other side!");
    init();
}