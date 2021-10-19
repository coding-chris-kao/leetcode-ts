function canConstruct(ransomNote: string, magazine: string): boolean {
  const letters = new Map<string, number>()
  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i]
    letters.set(letter, letters.has(letter) ? letters.get(letter)! + 1 : 1)
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const note = ransomNote[i]
    if (!letters.has(note) || letters.get(note)! < 1) return false
    letters.set(note, letters.get(note)! - 1)
  }
  return true
}
