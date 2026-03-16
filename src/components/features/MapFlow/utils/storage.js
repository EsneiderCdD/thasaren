export const STORAGE_KEY = 'thasaren-map-flow-positions';

export const getSavedPositions = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
};

export const saveNodePosition = (nodeId, position) => {
    const currentSaved = getSavedPositions();
    const updatedSaved = {
        ...currentSaved,
        [nodeId]: position
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSaved));
};
