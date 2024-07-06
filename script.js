class Character {
    constructor(name, type, strength, agility, intelligence) {
        this.name = name;
        this.type = type;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }

    attack() {
        // Логика атаки персонажа
    }

    useSkill(skill) {
        // Логика использования навыка
    }
}

// Создаем экземпляры персонажей
const warrior = new Character('Warrior', 'Warrior', 10, 5, 3);
const mage = new Character('Mage', 'Mage', 3, 5, 10);
