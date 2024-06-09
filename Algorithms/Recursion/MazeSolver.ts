const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
]

function walk(maze: string[], wall: string, end: Point, curr: Point, seen: boolean[][], path: Point[]) : boolean {
    // Base cases:
    // We're off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {

        return false;
    }

    // We reached the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // We hit a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // We've been here before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Pre recurse
    // Add current point to path and mark as seen
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // Recurse
    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        const next = {
            x: curr.x + x,
            y: curr.y + y
        };
        if (walk(maze, wall, end, next, seen, path)) {
            return true;
        }
    }

    // Post recurse
    // Remove current point from path
    path.pop();

    // If there is no end
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, end, start, seen, path);

    return path;
}