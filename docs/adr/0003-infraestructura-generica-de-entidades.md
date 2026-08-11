# Infraestructura genérica de Entidades

El modelo admite cualquier entidad Wowhead relevante (materiales, objetos, recetas, NPCs, misiones, poderes, habilidades, zonas, profesiones, etc.). Invertimos en una capa genérica (tipo + id + juego Wowhead) y tipamos casos concretos cuando el contenido los usa. Así no bloqueamos el dominio a un enum corto ni fabricamos demos de cada tipo en el piloto.
