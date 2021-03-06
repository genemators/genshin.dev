/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { VisionKey } from '@type/additional'

export interface Domain {
    name: string
    type: 'Forgery'
    description: string
    location: ['Wolvendom' | 'Mondstadt']
    requirements: Requirements[]
    recommendedElements: Recommendations[]
    rewards: number
}

export interface Requirements {
    level: 1 | 2 | 3 | 4 | 5
    adventureRank: number
    recommendedLevel: number
    leyLineDisorder: string
}

export interface Recommendations {
    element: VisionKey
}

export interface Rewards {
    day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'
    details: Details[]
}

export interface Details {
    level: 1 | 2 | 3 | 4 | 5
    adventureExperience: number
    companionshipExperience: number
    mora: number
    drops: Drop[]
}

export interface Drop {
    name: string
    drop_min: number
    drop_max: string
}
