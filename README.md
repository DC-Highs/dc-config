# @dchighs/dc-config

> ⚠️ **Note**: Don't ask me how to get your URL, Auth Token, or User ID; I won't answer you. If you don't know how to use this, it's because you shouldn't.

**@dchighs/dc-config** is a package for accessing game configuration data from [Dragon City](https://dragoncitygame.com/) (this is not an official SocialPoint library; it is fan-made).

## 📦 Installation

Installation is straightforward—simply use your preferred package manager. Here is an example using NPM:

```cmd
npm i @dchighs/dc-config
```

## 🚀 Usage

<a href="https://www.buymeacoffee.com/marcuth">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200">
</a>

### Fetching configuration for specific parameters

To create a `Config` instance, you need to provide credentials or use the static `.create()` method by providing the necessary parameters:

```ts
import { Config, ConfigLanguage, ConfigPlatform, ConfigFilter } from "@dchighs/dc-config"

;(async () => {
    const userId = process.env.USER_ID
    const authToken = process.env.AUTH_TOKEN
    const url = process.env.URL

    const config = await Config.create({
        url: url,
        userId: userId,
        authToken: authToken,
        language: ConfigLanguage.Turkish, // optional - "en" is default
        platform: ConfigPlatform.Android, // optional - "ios" is default
        filter: [ConfigFilter.Items] // optional - undefined is default
    })

    const data = config.data

    console.log(data)
})();
```

---

### Loading a saved configuration from a file

If you have a saved JSON file containing configuration data and want to load it to perform operations using the class, you can do it as follows:

```ts
import { Config, ConfigLanguage, ConfigPlatform, GameConfigDto } from "@dchighs/dc-config"
import fs from "node:fs"

;(async () => {
    const filePath = "config.json"
    const contentString = await fs.promises.readFile(filePath, { encoding: "utf-8" })
    const data = JSON.parse(contentString) as GameConfigDto

    const config = new Config({
        language: ConfigLanguage.Turkish,
        platform: ConfigPlatform.Android,
        data: data
    })
})();
```

---

### Fetching a raw configuration from a URL

If you have a full raw JSON file and want to fetch it and filter specific keys:

```ts
import { Config, ConfigFilter, ConfigLanguage } from "@dchighs/dc-config"

;(async () => {
    const rawUrl = "https://example.com/config.json"
    
    // Using createRaw to get a Config instance
    const config = await Config.createRaw({
        url: rawUrl,
        filter: [ConfigFilter.Items],
        language: ConfigLanguage.English
    })

    // Or using fetchRaw to get just the data (GameConfigDto)
    const data = await Config.fetchRaw({
        url: rawUrl,
        filter: [ConfigFilter.Items]
    })
})();
```

---

## 🤝 Contributing

* Want to contribute? Follow these steps:
* Fork the repository.
* Create a new branch (`git checkout -b feature-new`).
* Commit your changes (`git commit -m 'Add new feature'`).
* Push to the branch (`git push origin feature-new`).
* Open a Pull Request.

---

## 📝 License

This project is licensed under the MIT License.