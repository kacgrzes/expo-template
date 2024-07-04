import { Button } from "@mobile/components";
import { useCallback, useState } from "react";

const ButtonLoadingDemo = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Button
      title={"Test loading by pressing me!"}
      onPress={handlePress}
      loading={isLoading}
    />
  );
};

export default ButtonLoadingDemo;
