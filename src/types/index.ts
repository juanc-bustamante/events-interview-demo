export interface Event {
id: string;
title: string;
date: string;
location: string;
category: string;
description: string;
images: string[];
}

export interface FilterOptions {
category?: string;
startDate?: string;
endDate?: string;
location?: string;
}