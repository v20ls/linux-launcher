import React, { useState, useEffect } from 'react';
import { readDir } from '@tauri-apps/plugin-fs';
import { homeDir } from '@tauri-apps/api/path';

type FileEntry = {
    name: string,
    path: string,
    children?: FileEntry[];
};
function Launcher() {
    const [allFiles, setAllFiles] = useState<FileEntry[]>([]);
    const [query, setQuery] = useState<string>('');

    return (
        <div>
        </div>
    )
}

export default Launcher;