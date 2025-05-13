import React, { useState } from 'react';
import { readDir } from '@tauri-apps/plugin-fs';
import { homeDir } from '@tauri-apps/api/path';

type FileEntry = {
    name: string,
    path: string,
    children?: FileEntry[];
};
function Launcher() {

    return (
        <div>
        </div>
    )
}

export default Launcher;