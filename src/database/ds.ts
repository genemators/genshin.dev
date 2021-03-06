/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

/**
 * JSON Data Parser
 * @name axios json parser
 * @description parses json from online API
 * @return JSON
 */
import axios, { AxiosResponse } from 'axios'

export default async (link: string | URL): Promise<any | null> => {
    try {
        const response: AxiosResponse = await axios.get(<string>link)
        return response.data
    } catch (e) {
        return null
    }
}
