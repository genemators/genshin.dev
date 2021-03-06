/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import { TelegrafContext } from '@type/telegraf'

// Addons
import speech from '@actions/hook/speech'

composer.on('text', async (ctx: TelegrafContext) => {
    await speech(ctx)
})

middleware(composer)
consoles.module(__filename)
