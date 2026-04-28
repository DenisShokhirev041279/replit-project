import { useMutation } from "@tanstack/react-query";
import { api, type InsertSubscriber } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateSubscriber() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // Try to parse error message
        try {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to subscribe");
        } catch (e) {
          throw new Error("Failed to subscribe");
        }
      }

      return api.subscribers.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Access Granted",
        description: "You have been added to the protocol.",
        variant: "default",
        className: "bg-white text-black border-none font-mono uppercase tracking-widest",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Access Denied",
        description: error.message,
        variant: "destructive",
        className: "bg-red-900 border-red-800 text-white font-mono",
      });
    },
  });
}
